import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-non-pvp-server');
}

export default function Tibiantis772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-non-pvp-server" />;
}
