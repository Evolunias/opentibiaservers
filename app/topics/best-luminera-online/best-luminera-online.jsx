import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-online');
}

export default function BestLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-online" />;
}
