import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-pvp-server');
}

export default function Imperianic81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-pvp-server" />;
}
