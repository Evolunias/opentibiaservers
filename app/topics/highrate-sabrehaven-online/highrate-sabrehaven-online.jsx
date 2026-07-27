import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-online');
}

export default function HighrateSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-online" />;
}
