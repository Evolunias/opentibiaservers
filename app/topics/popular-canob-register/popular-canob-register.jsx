import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-register');
}

export default function PopularCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-register" />;
}
