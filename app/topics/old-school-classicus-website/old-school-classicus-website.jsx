import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-website');
}

export default function OldSchoolClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-website" />;
}
