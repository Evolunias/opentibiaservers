import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-website');
}

export default function OldSchoolThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-website" />;
}
