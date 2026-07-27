import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus');
}

export default function BestTibianusKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus" />;
}
