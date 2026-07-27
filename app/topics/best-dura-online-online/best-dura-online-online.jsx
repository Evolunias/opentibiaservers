import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-online');
}

export default function BestDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-online" />;
}
