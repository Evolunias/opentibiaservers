import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-website');
}

export default function OldSchoolThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-website" />;
}
