import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-north-america');
}

export default function TibijkaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-north-america" />;
}
