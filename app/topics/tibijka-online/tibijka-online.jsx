import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-online');
}

export default function TibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibijka-online" />;
}
