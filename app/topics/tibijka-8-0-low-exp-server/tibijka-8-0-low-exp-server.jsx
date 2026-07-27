import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-low-exp-server');
}

export default function Tibijka80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-low-exp-server" />;
}
