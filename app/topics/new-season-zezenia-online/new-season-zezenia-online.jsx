import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online');
}

export default function NewSeasonZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online" />;
}
