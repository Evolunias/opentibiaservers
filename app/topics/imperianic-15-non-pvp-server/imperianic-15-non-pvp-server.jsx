import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-non-pvp-server');
}

export default function Imperianic15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-non-pvp-server" />;
}
