import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-online');
}

export default function FreshStartTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-online" />;
}
