import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-website');
}

export default function ActiveDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-website" />;
}
