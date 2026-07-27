import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-login');
}

export default function OfficialOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-login" />;
}
