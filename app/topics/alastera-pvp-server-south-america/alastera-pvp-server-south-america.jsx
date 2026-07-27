import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-south-america');
}

export default function AlasteraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-south-america" />;
}
