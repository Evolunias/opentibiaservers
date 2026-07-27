import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-client');
}

export default function LowrateCanobClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-client" />;
}
