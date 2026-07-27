import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-usa');
}

export default function NoResetServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-usa" />;
}
