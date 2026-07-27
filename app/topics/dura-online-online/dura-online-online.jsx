import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-online');
}

export default function DuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="dura-online-online" />;
}
