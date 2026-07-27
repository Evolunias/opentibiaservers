import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-low-exp-server');
}

export default function Tibijka76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-low-exp-server" />;
}
