import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-south-america');
}

export default function TibiaraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-south-america" />;
}
