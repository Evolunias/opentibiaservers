import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-latin-america');
}

export default function NtoStarNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-latin-america" />;
}
