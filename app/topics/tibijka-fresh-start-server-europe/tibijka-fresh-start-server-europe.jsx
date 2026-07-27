import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-europe');
}

export default function TibijkaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-europe" />;
}
