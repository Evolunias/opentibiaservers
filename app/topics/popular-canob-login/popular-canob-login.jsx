import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-login');
}

export default function PopularCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-login" />;
}
