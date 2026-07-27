import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-latin-america');
}

export default function LowExpServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-latin-america" />;
}
