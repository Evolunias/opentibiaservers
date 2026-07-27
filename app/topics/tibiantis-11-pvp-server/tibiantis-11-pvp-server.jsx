import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-pvp-server');
}

export default function Tibiantis11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-pvp-server" />;
}
