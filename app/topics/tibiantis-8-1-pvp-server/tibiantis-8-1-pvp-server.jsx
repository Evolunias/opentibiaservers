import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-pvp-server');
}

export default function Tibiantis81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-pvp-server" />;
}
