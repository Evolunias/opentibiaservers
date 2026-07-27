import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-brazil');
}

export default function SaintsotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-brazil" />;
}
