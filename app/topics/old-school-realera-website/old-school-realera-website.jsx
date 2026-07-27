import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-website');
}

export default function OldSchoolRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-website" />;
}
