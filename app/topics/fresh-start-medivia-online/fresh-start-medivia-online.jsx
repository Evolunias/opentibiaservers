import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-online');
}

export default function FreshStartMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-online" />;
}
