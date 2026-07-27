import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-argentina');
}

export default function NoxiousotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-argentina" />;
}
