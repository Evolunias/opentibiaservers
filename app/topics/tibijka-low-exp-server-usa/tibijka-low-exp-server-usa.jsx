import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-usa');
}

export default function TibijkaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-usa" />;
}
