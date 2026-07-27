import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-online');
}

export default function ActiveAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-online" />;
}
