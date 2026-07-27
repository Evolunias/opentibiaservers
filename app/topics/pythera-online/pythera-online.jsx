import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-online');
}

export default function PytheraOnlineKeywordPage() {
  return <StaticKeywordPage slug="pythera-online" />;
}
