import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-brazil');
}

export default function SaintsotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-brazil" />;
}
