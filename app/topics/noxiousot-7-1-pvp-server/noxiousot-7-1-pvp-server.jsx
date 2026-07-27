import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-pvp-server');
}

export default function Noxiousot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-pvp-server" />;
}
