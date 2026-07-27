import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-pvp-server');
}

export default function Saintsot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-pvp-server" />;
}
