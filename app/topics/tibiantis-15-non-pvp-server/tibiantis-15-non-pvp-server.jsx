import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-non-pvp-server');
}

export default function Tibiantis15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-non-pvp-server" />;
}
