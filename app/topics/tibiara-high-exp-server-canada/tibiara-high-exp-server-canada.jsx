import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-canada');
}

export default function TibiaraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-canada" />;
}
