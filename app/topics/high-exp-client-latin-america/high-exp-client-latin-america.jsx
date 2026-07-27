import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-latin-america');
}

export default function HighExpClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-latin-america" />;
}
