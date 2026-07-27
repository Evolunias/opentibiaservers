import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-sweden');
}

export default function TibijkaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-sweden" />;
}
