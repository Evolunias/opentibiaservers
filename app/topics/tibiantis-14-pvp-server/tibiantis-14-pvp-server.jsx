import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-pvp-server');
}

export default function Tibiantis14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-pvp-server" />;
}
