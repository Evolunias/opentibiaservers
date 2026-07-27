import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-latin-america');
}

export default function AlasteraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-latin-america" />;
}
