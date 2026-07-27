import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-high-exp-server');
}

export default function Canob100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-high-exp-server" />;
}
