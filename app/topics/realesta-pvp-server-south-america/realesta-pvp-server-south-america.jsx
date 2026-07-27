import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-south-america');
}

export default function RealestaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-south-america" />;
}
