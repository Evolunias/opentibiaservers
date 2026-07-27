import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-website');
}

export default function OldSchoolSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-website" />;
}
