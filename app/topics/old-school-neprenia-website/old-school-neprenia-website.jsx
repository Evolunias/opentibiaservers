import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-website');
}

export default function OldSchoolNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-website" />;
}
