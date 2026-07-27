import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-online');
}

export default function TibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-online" />;
}
