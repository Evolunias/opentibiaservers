import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-4-pvp-server');
}

export default function Saintsot74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-4-pvp-server" />;
}
