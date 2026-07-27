import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-poland');
}

export default function TibijkaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-poland" />;
}
