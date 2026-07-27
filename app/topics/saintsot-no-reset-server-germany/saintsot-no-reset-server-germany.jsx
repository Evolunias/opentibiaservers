import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-germany');
}

export default function SaintsotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-germany" />;
}
