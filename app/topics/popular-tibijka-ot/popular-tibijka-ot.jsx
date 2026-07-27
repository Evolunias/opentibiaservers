import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-ot');
}

export default function PopularTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-ot" />;
}
