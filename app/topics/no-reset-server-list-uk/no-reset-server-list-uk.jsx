import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-uk');
}

export default function NoResetServerListUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-uk" />;
}
