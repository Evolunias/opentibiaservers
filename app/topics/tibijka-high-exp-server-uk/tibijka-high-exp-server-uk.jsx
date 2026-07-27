import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-uk');
}

export default function TibijkaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-uk" />;
}
