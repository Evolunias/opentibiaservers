import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-north-america');
}

export default function SaintsotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-north-america" />;
}
