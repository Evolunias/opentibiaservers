import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight');
}

export default function TopArchlightKeywordPage() {
  return <StaticKeywordPage slug="top-archlight" />;
}
