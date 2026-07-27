import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-latin-america');
}

export default function TibiameNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-latin-america" />;
}
