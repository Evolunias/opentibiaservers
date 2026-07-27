import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-latin-america');
}

export default function OlderaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-latin-america" />;
}
