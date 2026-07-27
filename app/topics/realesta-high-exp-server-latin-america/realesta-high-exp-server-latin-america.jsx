import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-latin-america');
}

export default function RealestaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-latin-america" />;
}
