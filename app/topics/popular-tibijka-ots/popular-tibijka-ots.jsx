import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-ots');
}

export default function PopularTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-ots" />;
}
