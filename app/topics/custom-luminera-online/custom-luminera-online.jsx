import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-online');
}

export default function CustomLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-online" />;
}
