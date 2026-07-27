import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-ot');
}

export default function TopTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-ot" />;
}
