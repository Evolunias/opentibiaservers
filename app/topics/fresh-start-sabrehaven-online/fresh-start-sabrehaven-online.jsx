import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-online');
}

export default function FreshStartSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-online" />;
}
