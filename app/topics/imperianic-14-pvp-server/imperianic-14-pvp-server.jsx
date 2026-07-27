import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-pvp-server');
}

export default function Imperianic14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-pvp-server" />;
}
