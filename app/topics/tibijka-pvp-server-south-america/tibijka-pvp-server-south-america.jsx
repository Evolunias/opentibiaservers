import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-south-america');
}

export default function TibijkaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-south-america" />;
}
