import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-website');
}

export default function NewDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-website" />;
}
