import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-1-pvp-server');
}

export default function Saintsot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-1-pvp-server" />;
}
