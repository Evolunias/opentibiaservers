import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-high-exp-server');
}

export default function Tibijka100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-high-exp-server" />;
}
