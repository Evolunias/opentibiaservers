import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-private-server');
}

export default function PopularCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-private-server" />;
}
