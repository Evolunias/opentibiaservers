import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-brazil');
}

export default function SaintsotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-brazil" />;
}
