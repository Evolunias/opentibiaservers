import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-online');
}

export default function PopularXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-online" />;
}
