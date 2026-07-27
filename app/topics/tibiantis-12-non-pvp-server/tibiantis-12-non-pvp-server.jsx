import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-non-pvp-server');
}

export default function Tibiantis12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-non-pvp-server" />;
}
