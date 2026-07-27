import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-high-exp-server');
}

export default function Tibijka772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-high-exp-server" />;
}
