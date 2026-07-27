import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-high-exp-server');
}

export default function Tibijka76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-high-exp-server" />;
}
