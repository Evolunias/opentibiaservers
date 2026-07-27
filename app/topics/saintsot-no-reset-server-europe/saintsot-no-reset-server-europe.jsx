import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-europe');
}

export default function SaintsotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-europe" />;
}
