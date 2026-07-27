import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-login');
}

export default function TopOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-login" />;
}
