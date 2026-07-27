import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-online');
}

export default function PopularLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-online" />;
}
