import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-client');
}

export default function PopularCanobClientKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-client" />;
}
