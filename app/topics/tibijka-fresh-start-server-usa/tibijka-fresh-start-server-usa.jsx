import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-usa');
}

export default function TibijkaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-usa" />;
}
