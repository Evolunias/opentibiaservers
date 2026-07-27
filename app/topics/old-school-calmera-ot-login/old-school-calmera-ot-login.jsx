import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-login');
}

export default function OldSchoolCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-login" />;
}
