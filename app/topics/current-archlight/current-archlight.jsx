import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight');
}

export default function CurrentArchlightKeywordPage() {
  return <StaticKeywordPage slug="current-archlight" />;
}
