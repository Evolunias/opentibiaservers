import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-pvp-server');
}

export default function Noxiousot74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-pvp-server" />;
}
