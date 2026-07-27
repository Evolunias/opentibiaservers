import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-register');
}

export default function BestCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-canob-register" />;
}
