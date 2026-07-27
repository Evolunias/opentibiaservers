import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-europe');
}

export default function TibijkaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-europe" />;
}
