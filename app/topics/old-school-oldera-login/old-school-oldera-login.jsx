import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-login');
}

export default function OldSchoolOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-login" />;
}
