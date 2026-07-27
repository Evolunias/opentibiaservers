import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-low-exp-server');
}

export default function Tibijka86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-low-exp-server" />;
}
