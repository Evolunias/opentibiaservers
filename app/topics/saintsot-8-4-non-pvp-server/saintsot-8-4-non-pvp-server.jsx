import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-non-pvp-server');
}

export default function Saintsot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-non-pvp-server" />;
}
