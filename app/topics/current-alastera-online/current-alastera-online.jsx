import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-online');
}

export default function CurrentAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-online" />;
}
