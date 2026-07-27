import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-online');
}

export default function NewSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-online" />;
}
