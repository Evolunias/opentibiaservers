import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-online');
}

export default function ActiveLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-online" />;
}
