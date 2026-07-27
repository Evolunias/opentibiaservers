import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-online');
}

export default function CurrentLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-online" />;
}
