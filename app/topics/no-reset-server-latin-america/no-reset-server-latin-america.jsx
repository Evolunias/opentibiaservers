import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-latin-america');
}

export default function NoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-latin-america" />;
}
