import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-online');
}

export default function CurrentSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-online" />;
}
