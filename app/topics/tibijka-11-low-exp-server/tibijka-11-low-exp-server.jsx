import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-low-exp-server');
}

export default function Tibijka11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-low-exp-server" />;
}
