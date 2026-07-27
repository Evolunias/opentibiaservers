import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-login');
}

export default function NewOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-login" />;
}
