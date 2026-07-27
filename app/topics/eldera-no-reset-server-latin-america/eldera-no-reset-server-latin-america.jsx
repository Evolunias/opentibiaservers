import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-latin-america');
}

export default function ElderaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-latin-america" />;
}
