import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-south-america');
}

export default function RealeraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-south-america" />;
}
