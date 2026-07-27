import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-north-america');
}

export default function ThorniaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-north-america" />;
}
