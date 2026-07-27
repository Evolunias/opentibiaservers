import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-pvp-server');
}

export default function Tibiantis86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-pvp-server" />;
}
