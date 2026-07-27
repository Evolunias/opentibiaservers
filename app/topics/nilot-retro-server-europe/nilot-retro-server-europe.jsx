import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-europe');
}

export default function NilotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-europe" />;
}
