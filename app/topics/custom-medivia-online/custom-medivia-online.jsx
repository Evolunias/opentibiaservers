import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-online');
}

export default function CustomMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-online" />;
}
