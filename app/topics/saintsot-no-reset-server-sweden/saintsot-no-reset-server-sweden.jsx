import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-sweden');
}

export default function SaintsotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-sweden" />;
}
