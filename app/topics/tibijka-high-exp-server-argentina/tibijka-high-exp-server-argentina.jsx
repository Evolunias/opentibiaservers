import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-argentina');
}

export default function TibijkaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-argentina" />;
}
