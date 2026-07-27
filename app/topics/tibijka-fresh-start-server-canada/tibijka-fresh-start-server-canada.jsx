import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-canada');
}

export default function TibijkaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-canada" />;
}
