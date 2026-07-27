import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-canob-server');
}

export default function LowExpCanobServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-canob-server" />;
}
