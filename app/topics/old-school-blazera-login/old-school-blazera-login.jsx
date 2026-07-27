import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-login');
}

export default function OldSchoolBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-login" />;
}
