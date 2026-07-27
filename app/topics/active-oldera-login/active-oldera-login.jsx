import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-login');
}

export default function ActiveOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-login" />;
}
