import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-south-america');
}

export default function TibijkaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-south-america" />;
}
