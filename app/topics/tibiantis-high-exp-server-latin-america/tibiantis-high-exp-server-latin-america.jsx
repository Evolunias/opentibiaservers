import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-latin-america');
}

export default function TibiantisHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-latin-america" />;
}
