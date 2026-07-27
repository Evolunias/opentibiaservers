import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-poland');
}

export default function TibiaraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-poland" />;
}
