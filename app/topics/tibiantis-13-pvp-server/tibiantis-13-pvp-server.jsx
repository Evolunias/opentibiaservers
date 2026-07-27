import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-pvp-server');
}

export default function Tibiantis13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-pvp-server" />;
}
