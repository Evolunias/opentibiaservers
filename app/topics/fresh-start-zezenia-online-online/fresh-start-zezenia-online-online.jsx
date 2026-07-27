import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-online');
}

export default function FreshStartZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-online" />;
}
