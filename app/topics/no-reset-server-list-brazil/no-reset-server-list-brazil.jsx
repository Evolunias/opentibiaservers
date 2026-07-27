import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-brazil');
}

export default function NoResetServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-brazil" />;
}
