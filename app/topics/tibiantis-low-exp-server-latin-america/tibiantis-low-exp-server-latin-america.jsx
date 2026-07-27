import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-latin-america');
}

export default function TibiantisLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-latin-america" />;
}
