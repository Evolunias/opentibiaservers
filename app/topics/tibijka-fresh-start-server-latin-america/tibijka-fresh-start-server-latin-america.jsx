import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-latin-america');
}

export default function TibijkaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-latin-america" />;
}
