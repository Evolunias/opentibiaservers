import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight');
}

export default function FreshStartArchlightKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight" />;
}
