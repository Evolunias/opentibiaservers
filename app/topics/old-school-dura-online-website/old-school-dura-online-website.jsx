import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-website');
}

export default function OldSchoolDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-website" />;
}
