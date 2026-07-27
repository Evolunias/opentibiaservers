import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-website');
}

export default function OldSchoolTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-website" />;
}
