import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-online');
}

export default function FreshStartTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-online" />;
}
