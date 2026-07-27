import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-online');
}

export default function JameraOnlineKeywordPage() {
  return <StaticKeywordPage slug="jamera-online" />;
}
