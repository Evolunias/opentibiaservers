import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-uk');
}

export default function SaintsotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-uk" />;
}
