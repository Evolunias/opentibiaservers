import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-online');
}

export default function FreshStartXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-online" />;
}
