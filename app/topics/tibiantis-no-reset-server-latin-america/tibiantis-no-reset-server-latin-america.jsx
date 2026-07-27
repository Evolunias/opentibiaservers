import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-latin-america');
}

export default function TibiantisNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-latin-america" />;
}
