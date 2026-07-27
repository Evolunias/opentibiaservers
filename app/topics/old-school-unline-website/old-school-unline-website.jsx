import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-website');
}

export default function OldSchoolUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-website" />;
}
