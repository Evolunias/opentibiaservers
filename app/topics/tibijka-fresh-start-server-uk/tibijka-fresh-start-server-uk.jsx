import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-uk');
}

export default function TibijkaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-uk" />;
}
