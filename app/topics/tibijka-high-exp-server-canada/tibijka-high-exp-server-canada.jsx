import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-canada');
}

export default function TibijkaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-canada" />;
}
