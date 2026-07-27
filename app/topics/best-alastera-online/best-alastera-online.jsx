import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-online');
}

export default function BestAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-online" />;
}
