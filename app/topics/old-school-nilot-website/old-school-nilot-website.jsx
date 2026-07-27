import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-website');
}

export default function OldSchoolNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-website" />;
}
