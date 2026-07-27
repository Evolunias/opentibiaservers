import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-germany');
}

export default function NoResetServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-germany" />;
}
