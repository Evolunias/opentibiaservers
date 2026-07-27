import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-high-exp-server');
}

export default function Canob80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-high-exp-server" />;
}
