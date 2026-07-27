import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-latin-america');
}

export default function NoxiousotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-latin-america" />;
}
