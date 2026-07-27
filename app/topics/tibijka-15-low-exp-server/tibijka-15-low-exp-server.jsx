import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-low-exp-server');
}

export default function Tibijka15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-low-exp-server" />;
}
