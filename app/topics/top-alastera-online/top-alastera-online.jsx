import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-online');
}

export default function TopAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-online" />;
}
