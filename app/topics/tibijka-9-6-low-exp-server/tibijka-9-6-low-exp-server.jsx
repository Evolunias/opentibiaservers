import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-low-exp-server');
}

export default function Tibijka96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-low-exp-server" />;
}
