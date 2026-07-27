import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-online');
}

export default function NewLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-online" />;
}
