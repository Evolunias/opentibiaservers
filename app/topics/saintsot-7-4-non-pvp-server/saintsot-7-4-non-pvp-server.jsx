import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-4-non-pvp-server');
}

export default function Saintsot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-4-non-pvp-server" />;
}
