import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight');
}

export default function NewArchlightKeywordPage() {
  return <StaticKeywordPage slug="new-archlight" />;
}
