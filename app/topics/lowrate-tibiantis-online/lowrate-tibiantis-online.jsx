import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-online');
}

export default function LowrateTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-online" />;
}
