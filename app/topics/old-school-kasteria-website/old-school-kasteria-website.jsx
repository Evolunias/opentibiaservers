import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-website');
}

export default function OldSchoolKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-website" />;
}
