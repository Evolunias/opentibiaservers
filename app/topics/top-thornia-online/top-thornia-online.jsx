import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-online');
}

export default function TopThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-online" />;
}
