import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-online');
}

export default function LowrateSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-online" />;
}
