import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-north-america');
}

export default function TibijkaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-north-america" />;
}
