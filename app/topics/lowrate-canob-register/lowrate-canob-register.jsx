import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-register');
}

export default function LowrateCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-register" />;
}
