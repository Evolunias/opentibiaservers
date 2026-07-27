import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-website');
}

export default function OldSchoolZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-website" />;
}
