import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-germany');
}

export default function TibijkaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-germany" />;
}
