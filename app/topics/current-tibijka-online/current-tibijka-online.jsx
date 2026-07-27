import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-online');
}

export default function CurrentTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-online" />;
}
