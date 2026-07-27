import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-argentina');
}

export default function NoxiousotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-argentina" />;
}
