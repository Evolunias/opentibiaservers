import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-ots');
}

export default function TopTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-ots" />;
}
