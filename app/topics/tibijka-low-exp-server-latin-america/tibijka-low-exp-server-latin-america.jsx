import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-latin-america');
}

export default function TibijkaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-latin-america" />;
}
