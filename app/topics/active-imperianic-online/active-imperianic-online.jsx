import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-online');
}

export default function ActiveImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-online" />;
}
