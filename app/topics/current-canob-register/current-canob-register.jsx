import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-register');
}

export default function CurrentCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-canob-register" />;
}
