import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-north-america');
}

export default function TibijkaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-north-america" />;
}
