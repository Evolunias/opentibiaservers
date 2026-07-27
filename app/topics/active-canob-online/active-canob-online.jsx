import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-online');
}

export default function ActiveCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-canob-online" />;
}
