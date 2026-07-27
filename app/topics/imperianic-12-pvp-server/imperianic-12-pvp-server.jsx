import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-pvp-server');
}

export default function Imperianic12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-pvp-server" />;
}
