import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-latin-america');
}

export default function EvoOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-latin-america" />;
}
