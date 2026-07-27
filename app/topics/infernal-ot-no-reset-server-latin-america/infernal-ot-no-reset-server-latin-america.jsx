import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-latin-america');
}

export default function InfernalOtNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-latin-america" />;
}
