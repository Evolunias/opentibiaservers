import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-brazil');
}

export default function SaintsotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-brazil" />;
}
