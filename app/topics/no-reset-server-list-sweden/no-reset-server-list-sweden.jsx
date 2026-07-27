import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-sweden');
}

export default function NoResetServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-sweden" />;
}
