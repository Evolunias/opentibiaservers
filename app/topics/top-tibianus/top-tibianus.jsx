import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus');
}

export default function TopTibianusKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus" />;
}
