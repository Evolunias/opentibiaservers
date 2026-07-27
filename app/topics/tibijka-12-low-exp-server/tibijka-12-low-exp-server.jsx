import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-low-exp-server');
}

export default function Tibijka12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-low-exp-server" />;
}
