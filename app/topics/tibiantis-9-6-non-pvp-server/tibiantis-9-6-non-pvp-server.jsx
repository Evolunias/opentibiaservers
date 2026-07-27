import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-non-pvp-server');
}

export default function Tibiantis96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-non-pvp-server" />;
}
