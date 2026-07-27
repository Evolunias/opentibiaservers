import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-sweden');
}

export default function NoResetOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-sweden" />;
}
