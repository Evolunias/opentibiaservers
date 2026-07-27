import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-online');
}

export default function TopLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-online" />;
}
