import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-website');
}

export default function OldSchoolAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-website" />;
}
