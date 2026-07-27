import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-online');
}

export default function BestSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-online" />;
}
