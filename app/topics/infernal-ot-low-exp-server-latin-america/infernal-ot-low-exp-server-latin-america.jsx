import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-latin-america');
}

export default function InfernalOtLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-latin-america" />;
}
