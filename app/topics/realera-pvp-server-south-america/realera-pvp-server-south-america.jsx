import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-south-america');
}

export default function RealeraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-south-america" />;
}
