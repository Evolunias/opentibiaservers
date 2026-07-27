import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-login');
}

export default function PopularOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-login" />;
}
