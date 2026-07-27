import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-online');
}

export default function PopularSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-online" />;
}
