import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-no-reset-server-sweden');
}

export default function DuraOnlineNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-no-reset-server-sweden" />;
}
