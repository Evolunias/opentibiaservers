import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-argentina');
}

export default function NoResetServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-argentina" />;
}
