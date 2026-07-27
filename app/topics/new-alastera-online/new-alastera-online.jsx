import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-online');
}

export default function NewAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-online" />;
}
