import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-latin-america');
}

export default function UnlineHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-latin-america" />;
}
