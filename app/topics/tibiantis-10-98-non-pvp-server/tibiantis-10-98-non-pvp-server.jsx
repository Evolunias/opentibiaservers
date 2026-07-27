import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-non-pvp-server');
}

export default function Tibiantis1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-non-pvp-server" />;
}
