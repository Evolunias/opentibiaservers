import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-website');
}

export default function OldSchoolMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-website" />;
}
