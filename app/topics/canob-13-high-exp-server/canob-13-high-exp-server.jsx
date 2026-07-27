import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-high-exp-server');
}

export default function Canob13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-high-exp-server" />;
}
