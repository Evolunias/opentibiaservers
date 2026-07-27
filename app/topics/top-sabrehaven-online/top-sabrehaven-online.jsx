import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-online');
}

export default function TopSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-online" />;
}
