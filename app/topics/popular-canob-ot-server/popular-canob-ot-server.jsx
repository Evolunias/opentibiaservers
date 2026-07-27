import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-ot-server');
}

export default function PopularCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-ot-server" />;
}
