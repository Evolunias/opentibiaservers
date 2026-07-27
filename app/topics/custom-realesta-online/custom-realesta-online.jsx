import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-online');
}

export default function CustomRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-online" />;
}
