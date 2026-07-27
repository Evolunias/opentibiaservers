import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-pvp-server');
}

export default function Tibiantis76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-pvp-server" />;
}
