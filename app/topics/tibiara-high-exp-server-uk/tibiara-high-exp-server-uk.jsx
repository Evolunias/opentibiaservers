import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-uk');
}

export default function TibiaraHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-uk" />;
}
