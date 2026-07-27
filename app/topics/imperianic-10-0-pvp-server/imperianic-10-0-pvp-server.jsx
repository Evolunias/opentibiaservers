import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-pvp-server');
}

export default function Imperianic100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-pvp-server" />;
}
