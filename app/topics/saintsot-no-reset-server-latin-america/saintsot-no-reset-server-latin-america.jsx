import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-latin-america');
}

export default function SaintsotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-latin-america" />;
}
