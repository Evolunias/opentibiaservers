import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-online');
}

export default function ActiveMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-online" />;
}
