import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-online');
}

export default function CustomAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-online" />;
}
