import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-pvp-server');
}

export default function Imperianic86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-pvp-server" />;
}
