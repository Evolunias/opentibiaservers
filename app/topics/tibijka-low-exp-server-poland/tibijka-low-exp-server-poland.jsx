import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-poland');
}

export default function TibijkaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-poland" />;
}
