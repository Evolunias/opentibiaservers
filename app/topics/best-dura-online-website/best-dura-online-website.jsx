import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-website');
}

export default function BestDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-website" />;
}
