import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-latin-america');
}

export default function TibijkaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-latin-america" />;
}
