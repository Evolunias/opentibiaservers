import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-online');
}

export default function TheForgottenServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-online" />;
}
