import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-latin-america');
}

export default function ShadowcoresNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-latin-america" />;
}
