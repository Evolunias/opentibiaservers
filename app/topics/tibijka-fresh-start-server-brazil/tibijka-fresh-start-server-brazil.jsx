import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-brazil');
}

export default function TibijkaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-brazil" />;
}
