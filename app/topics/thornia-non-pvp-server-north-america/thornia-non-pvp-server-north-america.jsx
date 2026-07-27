import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-north-america');
}

export default function ThorniaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-north-america" />;
}
