import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-98-non-pvp-server');
}

export default function Imperianic1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-98-non-pvp-server" />;
}
