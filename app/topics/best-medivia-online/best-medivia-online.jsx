import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-online');
}

export default function BestMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-online" />;
}
