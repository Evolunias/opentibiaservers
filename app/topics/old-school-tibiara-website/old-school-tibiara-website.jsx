import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-website');
}

export default function OldSchoolTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-website" />;
}
