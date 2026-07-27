import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-non-pvp-server');
}

export default function Imperianic11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-non-pvp-server" />;
}
