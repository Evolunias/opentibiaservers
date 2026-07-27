import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-72-pvp-server');
}

export default function Noxiousot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-72-pvp-server" />;
}
