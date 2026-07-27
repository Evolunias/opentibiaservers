import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-south-america');
}

export default function NoxiousotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-south-america" />;
}
