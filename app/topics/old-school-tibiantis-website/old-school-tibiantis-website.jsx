import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-website');
}

export default function OldSchoolTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-website" />;
}
