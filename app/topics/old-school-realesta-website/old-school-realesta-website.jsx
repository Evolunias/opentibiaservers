import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-website');
}

export default function OldSchoolRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-website" />;
}
