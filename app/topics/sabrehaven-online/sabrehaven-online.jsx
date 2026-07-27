import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-online');
}

export default function SabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-online" />;
}
