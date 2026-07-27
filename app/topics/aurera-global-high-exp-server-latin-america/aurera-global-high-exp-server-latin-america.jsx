import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-latin-america');
}

export default function AureraGlobalHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-latin-america" />;
}
