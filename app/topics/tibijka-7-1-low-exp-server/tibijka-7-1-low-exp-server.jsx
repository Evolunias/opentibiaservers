import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-low-exp-server');
}

export default function Tibijka71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-low-exp-server" />;
}
