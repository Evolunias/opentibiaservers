import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-germany');
}

export default function TibijkaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-germany" />;
}
