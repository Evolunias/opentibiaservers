import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-pvp-server');
}

export default function Noxiousot100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-pvp-server" />;
}
