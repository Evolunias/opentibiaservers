import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-latin-america');
}

export default function LowExpServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-latin-america" />;
}
