import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob');
}

export default function LowrateCanobKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob" />;
}
