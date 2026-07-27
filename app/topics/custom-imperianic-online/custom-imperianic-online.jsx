import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-online');
}

export default function CustomImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-online" />;
}
