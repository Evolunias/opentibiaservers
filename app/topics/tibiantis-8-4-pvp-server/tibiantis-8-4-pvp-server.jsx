import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-pvp-server');
}

export default function Tibiantis84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-pvp-server" />;
}
