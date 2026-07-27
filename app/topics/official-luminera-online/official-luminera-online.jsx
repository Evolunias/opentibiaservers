import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-online');
}

export default function OfficialLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-online" />;
}
