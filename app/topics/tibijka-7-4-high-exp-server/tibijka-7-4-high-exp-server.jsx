import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-high-exp-server');
}

export default function Tibijka74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-high-exp-server" />;
}
