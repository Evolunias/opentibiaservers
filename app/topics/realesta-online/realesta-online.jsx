import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-online');
}

export default function RealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="realesta-online" />;
}
