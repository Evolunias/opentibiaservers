import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-98-pvp-server');
}

export default function Noxiousot1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-98-pvp-server" />;
}
