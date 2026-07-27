import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-54-pvp-server');
}

export default function Imperianic854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-54-pvp-server" />;
}
