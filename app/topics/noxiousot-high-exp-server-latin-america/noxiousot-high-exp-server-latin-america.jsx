import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-latin-america');
}

export default function NoxiousotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-latin-america" />;
}
