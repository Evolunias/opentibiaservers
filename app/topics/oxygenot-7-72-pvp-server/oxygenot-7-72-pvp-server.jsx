import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-pvp-server');
}

export default function Oxygenot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-pvp-server" />;
}
