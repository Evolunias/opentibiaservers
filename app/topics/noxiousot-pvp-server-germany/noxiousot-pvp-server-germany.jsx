import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-germany');
}

export default function NoxiousotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-germany" />;
}
