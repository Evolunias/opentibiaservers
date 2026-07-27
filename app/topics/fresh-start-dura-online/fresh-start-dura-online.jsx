import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online');
}

export default function FreshStartDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online" />;
}
