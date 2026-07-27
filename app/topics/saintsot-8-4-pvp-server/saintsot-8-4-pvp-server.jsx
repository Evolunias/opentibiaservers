import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-pvp-server');
}

export default function Saintsot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-pvp-server" />;
}
