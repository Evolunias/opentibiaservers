import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-mexico');
}

export default function TibijkaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-mexico" />;
}
