import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-pvp-server');
}

export default function Tibiantis80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-pvp-server" />;
}
