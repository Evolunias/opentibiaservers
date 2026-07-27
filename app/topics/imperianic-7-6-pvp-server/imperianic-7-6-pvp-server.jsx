import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-pvp-server');
}

export default function Imperianic76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-pvp-server" />;
}
