import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus');
}

export default function PopularTibianusKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus" />;
}
