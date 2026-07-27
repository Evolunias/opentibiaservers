import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-poland');
}

export default function SaintsotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-poland" />;
}
