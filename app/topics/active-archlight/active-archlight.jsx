import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight');
}

export default function ActiveArchlightKeywordPage() {
  return <StaticKeywordPage slug="active-archlight" />;
}
