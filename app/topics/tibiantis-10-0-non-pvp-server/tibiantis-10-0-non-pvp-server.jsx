import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-non-pvp-server');
}

export default function Tibiantis100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-non-pvp-server" />;
}
