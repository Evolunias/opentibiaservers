import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-south-america');
}

export default function TibijkaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-south-america" />;
}
