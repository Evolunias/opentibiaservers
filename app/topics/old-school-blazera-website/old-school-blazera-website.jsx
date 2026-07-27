import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-website');
}

export default function OldSchoolBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-website" />;
}
