import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-online');
}

export default function FreshStartLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-online" />;
}
