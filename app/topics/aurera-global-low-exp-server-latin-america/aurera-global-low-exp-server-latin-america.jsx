import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-latin-america');
}

export default function AureraGlobalLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-latin-america" />;
}
