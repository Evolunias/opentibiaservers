import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-brazil');
}

export default function SaintsotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-brazil" />;
}
