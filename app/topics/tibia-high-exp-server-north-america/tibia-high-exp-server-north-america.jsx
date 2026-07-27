import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-north-america');
}

export default function TibiaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-north-america" />;
}
