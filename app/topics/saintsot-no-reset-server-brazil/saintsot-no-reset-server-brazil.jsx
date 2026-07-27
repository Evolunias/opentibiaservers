import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-brazil');
}

export default function SaintsotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-brazil" />;
}
