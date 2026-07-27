import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-mexico');
}

export default function NoResetServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-mexico" />;
}
