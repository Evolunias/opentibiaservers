import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-north-america');
}

export default function MiracleNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-north-america" />;
}
