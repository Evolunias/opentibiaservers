import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-latin-america');
}

export default function MidhemNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-latin-america" />;
}
