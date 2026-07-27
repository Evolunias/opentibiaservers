import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-high-exp-server');
}

export default function Tibijka11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-high-exp-server" />;
}
