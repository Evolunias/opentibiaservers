import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-north-america');
}

export default function TibiaraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-north-america" />;
}
