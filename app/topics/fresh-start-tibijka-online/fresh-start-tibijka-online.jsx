import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-online');
}

export default function FreshStartTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-online" />;
}
