import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-low-exp-server');
}

export default function Tibijka84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-low-exp-server" />;
}
