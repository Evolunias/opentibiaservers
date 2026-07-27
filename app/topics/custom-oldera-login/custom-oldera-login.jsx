import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-login');
}

export default function CustomOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-login" />;
}
