import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-online');
}

export default function NewCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-canob-online" />;
}
