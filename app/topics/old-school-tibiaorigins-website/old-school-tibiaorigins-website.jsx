import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-website');
}

export default function OldSchoolTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-website" />;
}
