import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-brazil');
}

export default function TibijkaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-brazil" />;
}
