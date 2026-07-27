import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-website');
}

export default function OfficialDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-website" />;
}
