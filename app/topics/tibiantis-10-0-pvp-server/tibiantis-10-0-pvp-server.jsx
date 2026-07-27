import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-pvp-server');
}

export default function Tibiantis100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-pvp-server" />;
}
