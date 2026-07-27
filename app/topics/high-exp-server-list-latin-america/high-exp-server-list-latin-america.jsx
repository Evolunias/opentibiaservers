import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-latin-america');
}

export default function HighExpServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-latin-america" />;
}
