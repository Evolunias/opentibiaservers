import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-non-pvp-server');
}

export default function Imperianic100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-non-pvp-server" />;
}
