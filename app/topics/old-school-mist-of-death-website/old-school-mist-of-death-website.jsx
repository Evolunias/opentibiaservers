import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-website');
}

export default function OldSchoolMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-website" />;
}
