import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-online');
}

export default function LowrateLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-online" />;
}
