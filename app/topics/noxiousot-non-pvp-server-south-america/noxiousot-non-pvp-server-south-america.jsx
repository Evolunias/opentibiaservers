import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-south-america');
}

export default function NoxiousotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-south-america" />;
}
