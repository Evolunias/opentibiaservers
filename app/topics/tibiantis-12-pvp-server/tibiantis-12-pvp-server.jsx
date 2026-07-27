import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-pvp-server');
}

export default function Tibiantis12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-pvp-server" />;
}
