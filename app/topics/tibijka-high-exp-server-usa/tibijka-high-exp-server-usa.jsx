import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-usa');
}

export default function TibijkaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-usa" />;
}
