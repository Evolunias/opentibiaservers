import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-pvp-server');
}

export default function Imperianic13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-pvp-server" />;
}
