import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-online');
}

export default function LowrateTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-online" />;
}
