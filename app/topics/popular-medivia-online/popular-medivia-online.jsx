import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-online');
}

export default function PopularMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-online" />;
}
