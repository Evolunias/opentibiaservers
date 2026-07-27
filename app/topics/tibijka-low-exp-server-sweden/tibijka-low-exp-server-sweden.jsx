import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-sweden');
}

export default function TibijkaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-sweden" />;
}
