import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-latin-america');
}

export default function NoResetServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-latin-america" />;
}
