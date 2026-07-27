import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-france');
}

export default function SaintsotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-france" />;
}
