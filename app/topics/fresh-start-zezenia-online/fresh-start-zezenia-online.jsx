import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online');
}

export default function FreshStartZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online" />;
}
