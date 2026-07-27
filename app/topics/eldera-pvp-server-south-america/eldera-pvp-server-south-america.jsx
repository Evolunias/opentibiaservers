import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-south-america');
}

export default function ElderaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-south-america" />;
}
