import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-argentina');
}

export default function TibijkaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-argentina" />;
}
