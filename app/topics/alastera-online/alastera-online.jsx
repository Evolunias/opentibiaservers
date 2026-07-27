import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-online');
}

export default function AlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="alastera-online" />;
}
