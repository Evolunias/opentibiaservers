import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-pvp-server');
}

export default function Tibiantis772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-pvp-server" />;
}
