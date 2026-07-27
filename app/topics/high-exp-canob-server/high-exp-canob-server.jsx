import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-canob-server');
}

export default function HighExpCanobServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-canob-server" />;
}
