import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-latin-america');
}

export default function KasteriaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-latin-america" />;
}
