import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-high-exp-server');
}

export default function Tibijka15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-high-exp-server" />;
}
