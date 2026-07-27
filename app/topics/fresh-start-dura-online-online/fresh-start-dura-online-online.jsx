import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-online');
}

export default function FreshStartDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-online" />;
}
