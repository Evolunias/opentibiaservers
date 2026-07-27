import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-uk');
}

export default function TibijkaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-uk" />;
}
