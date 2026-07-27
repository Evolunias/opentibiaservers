import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-online');
}

export default function RealMapSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-online" />;
}
