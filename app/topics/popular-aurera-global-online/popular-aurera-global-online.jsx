import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-online');
}

export default function PopularAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-online" />;
}
