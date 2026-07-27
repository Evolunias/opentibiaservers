import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-latin-america');
}

export default function LowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-latin-america" />;
}
