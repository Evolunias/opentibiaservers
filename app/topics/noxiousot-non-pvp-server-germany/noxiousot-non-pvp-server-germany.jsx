import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-germany');
}

export default function NoxiousotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-germany" />;
}
