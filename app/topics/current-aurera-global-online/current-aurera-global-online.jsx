import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-online');
}

export default function CurrentAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-online" />;
}
