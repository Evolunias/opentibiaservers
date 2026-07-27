import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight');
}

export default function PopularArchlightKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight" />;
}
