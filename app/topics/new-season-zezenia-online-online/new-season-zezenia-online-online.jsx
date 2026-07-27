import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-online');
}

export default function NewSeasonZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-online" />;
}
