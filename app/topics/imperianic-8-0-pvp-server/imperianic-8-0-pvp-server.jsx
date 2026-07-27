import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-pvp-server');
}

export default function Imperianic80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-pvp-server" />;
}
