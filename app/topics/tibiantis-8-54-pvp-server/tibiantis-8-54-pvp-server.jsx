import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-pvp-server');
}

export default function Tibiantis854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-pvp-server" />;
}
