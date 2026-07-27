import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-pvp-server');
}

export default function Imperianic96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-pvp-server" />;
}
