import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-login');
}

export default function FreshStartOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-login" />;
}
