import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-latin-america');
}

export default function RealeraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-latin-america" />;
}
