import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-poland');
}

export default function NilotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-poland" />;
}
