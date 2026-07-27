import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-6-pvp-server');
}

export default function Saintsot76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-6-pvp-server" />;
}
