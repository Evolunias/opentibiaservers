import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online');
}

export default function BestDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online" />;
}
