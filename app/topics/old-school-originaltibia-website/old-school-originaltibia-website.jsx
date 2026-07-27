import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-website');
}

export default function OldSchoolOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-website" />;
}
