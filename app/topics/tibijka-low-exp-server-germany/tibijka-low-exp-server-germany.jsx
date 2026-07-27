import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-germany');
}

export default function TibijkaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-germany" />;
}
