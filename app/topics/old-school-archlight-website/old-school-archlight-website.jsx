import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-website');
}

export default function OldSchoolArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-website" />;
}
