import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-high-exp-server');
}

export default function Tibijka80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-high-exp-server" />;
}
