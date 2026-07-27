import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-online');
}

export default function FreshStartBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-online" />;
}
