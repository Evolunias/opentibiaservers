import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-south-america');
}

export default function OxygenotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-south-america" />;
}
