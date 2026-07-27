import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-website');
}

export default function CustomDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-website" />;
}
