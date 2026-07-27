import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online');
}

export default function DuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="dura-online" />;
}
