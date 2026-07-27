import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-website');
}

export default function OldSchoolEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-website" />;
}
