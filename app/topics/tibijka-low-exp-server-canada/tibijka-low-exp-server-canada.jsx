import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-canada');
}

export default function TibijkaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-canada" />;
}
