import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-online');
}

export default function TopTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-online" />;
}
