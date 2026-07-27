import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-north-america');
}

export default function RealeraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-north-america" />;
}
