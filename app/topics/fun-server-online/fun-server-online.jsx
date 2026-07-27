import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-online');
}

export default function FunServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="fun-server-online" />;
}
