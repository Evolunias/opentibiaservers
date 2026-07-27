import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-uk');
}

export default function NilotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-uk" />;
}
