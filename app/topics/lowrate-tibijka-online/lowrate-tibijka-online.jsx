import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-online');
}

export default function LowrateTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-online" />;
}
