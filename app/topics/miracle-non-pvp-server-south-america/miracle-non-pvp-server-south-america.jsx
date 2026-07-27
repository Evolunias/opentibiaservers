import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-south-america');
}

export default function MiracleNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-south-america" />;
}
