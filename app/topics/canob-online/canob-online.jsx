import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-online');
}

export default function CanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="canob-online" />;
}
