import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-online');
}

export default function TopClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-online" />;
}
