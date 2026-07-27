import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-latin-america');
}

export default function HighExpServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-latin-america" />;
}
