import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-login');
}

export default function BestOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-login" />;
}
