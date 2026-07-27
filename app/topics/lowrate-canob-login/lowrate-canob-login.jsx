import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-login');
}

export default function LowrateCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-login" />;
}
