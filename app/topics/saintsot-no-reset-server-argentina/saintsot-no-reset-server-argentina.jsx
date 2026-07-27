import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-argentina');
}

export default function SaintsotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-argentina" />;
}
