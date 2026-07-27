import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-high-exp-server');
}

export default function Canob71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-high-exp-server" />;
}
