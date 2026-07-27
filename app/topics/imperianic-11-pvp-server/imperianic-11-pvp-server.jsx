import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-pvp-server');
}

export default function Imperianic11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-pvp-server" />;
}
