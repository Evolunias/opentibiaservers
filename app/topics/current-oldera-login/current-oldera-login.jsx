import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-login');
}

export default function CurrentOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-login" />;
}
