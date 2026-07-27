import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-online');
}

export default function CustomTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-online" />;
}
