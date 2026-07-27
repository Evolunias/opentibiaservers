import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-latin-america');
}

export default function InfernalOtHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-latin-america" />;
}
