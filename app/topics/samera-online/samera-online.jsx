import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-online');
}

export default function SameraOnlineKeywordPage() {
  return <StaticKeywordPage slug="samera-online" />;
}
