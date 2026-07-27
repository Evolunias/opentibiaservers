import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-online');
}

export default function LiberaOnlineKeywordPage() {
  return <StaticKeywordPage slug="libera-online" />;
}
