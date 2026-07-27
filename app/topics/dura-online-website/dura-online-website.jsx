import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-website');
}

export default function DuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="dura-online-website" />;
}
