import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-high-exp-server');
}

export default function Tibijka81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-high-exp-server" />;
}
