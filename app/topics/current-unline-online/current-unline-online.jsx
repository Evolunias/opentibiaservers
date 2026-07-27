import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-online');
}

export default function CurrentUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-unline-online" />;
}
