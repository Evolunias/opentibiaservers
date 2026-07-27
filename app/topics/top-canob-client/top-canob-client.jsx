import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-client');
}

export default function TopCanobClientKeywordPage() {
  return <StaticKeywordPage slug="top-canob-client" />;
}
