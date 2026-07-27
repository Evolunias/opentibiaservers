import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-online');
}

export default function CustomCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-online" />;
}
