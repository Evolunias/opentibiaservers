import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-login');
}

export default function OldSchoolRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-login" />;
}
