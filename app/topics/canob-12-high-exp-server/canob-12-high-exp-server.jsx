import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-high-exp-server');
}

export default function Canob12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-high-exp-server" />;
}
