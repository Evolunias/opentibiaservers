import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-online');
}

export default function LumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="luminera-online" />;
}
