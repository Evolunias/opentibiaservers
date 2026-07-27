import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-north-america');
}

export default function KasteriaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-north-america" />;
}
