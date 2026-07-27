import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-online');
}

export default function FreshStartAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-online" />;
}
