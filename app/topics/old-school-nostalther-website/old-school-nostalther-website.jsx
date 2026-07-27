import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-website');
}

export default function OldSchoolNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-website" />;
}
