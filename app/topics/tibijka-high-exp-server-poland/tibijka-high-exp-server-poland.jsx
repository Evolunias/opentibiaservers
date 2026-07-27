import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-poland');
}

export default function TibijkaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-poland" />;
}
