import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-server');
}

export default function PopularCanobServerKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-server" />;
}
