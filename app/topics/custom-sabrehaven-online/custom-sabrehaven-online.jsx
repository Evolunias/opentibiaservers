import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-online');
}

export default function CustomSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-online" />;
}
