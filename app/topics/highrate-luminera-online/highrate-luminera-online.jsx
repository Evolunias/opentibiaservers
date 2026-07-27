import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-online');
}

export default function HighrateLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-online" />;
}
