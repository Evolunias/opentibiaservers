import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-mexico');
}

export default function TibijkaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-mexico" />;
}
