import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-latin-america');
}

export default function LowExpOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-latin-america" />;
}
