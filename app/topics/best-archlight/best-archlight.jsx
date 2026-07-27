import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight');
}

export default function BestArchlightKeywordPage() {
  return <StaticKeywordPage slug="best-archlight" />;
}
