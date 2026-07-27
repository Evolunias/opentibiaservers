import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-online');
}

export default function CurrentTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-online" />;
}
