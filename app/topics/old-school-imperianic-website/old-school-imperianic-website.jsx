import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-website');
}

export default function OldSchoolImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-website" />;
}
