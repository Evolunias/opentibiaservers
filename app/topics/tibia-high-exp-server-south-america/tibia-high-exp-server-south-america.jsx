import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-south-america');
}

export default function TibiaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-south-america" />;
}
