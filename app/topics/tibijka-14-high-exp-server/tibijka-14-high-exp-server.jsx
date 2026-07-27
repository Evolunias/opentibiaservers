import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-high-exp-server');
}

export default function Tibijka14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-high-exp-server" />;
}
