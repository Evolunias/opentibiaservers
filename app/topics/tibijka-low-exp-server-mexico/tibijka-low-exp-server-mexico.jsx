import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-mexico');
}

export default function TibijkaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-mexico" />;
}
