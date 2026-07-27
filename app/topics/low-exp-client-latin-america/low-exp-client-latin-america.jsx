import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-latin-america');
}

export default function LowExpClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-latin-america" />;
}
