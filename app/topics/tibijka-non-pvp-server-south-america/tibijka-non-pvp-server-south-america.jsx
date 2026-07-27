import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-south-america');
}

export default function TibijkaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-south-america" />;
}
