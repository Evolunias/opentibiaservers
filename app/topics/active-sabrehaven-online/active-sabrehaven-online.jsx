import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-online');
}

export default function ActiveSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-online" />;
}
