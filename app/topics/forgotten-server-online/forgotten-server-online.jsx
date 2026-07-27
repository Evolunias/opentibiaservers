import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-online');
}

export default function ForgottenServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-online" />;
}
