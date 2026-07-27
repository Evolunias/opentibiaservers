import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-europe');
}

export default function TibijkaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-europe" />;
}
