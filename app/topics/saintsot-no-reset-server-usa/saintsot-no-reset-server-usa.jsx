import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-usa');
}

export default function SaintsotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-usa" />;
}
