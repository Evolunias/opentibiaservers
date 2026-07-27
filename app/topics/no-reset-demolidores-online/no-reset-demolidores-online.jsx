import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-online');
}

export default function NoResetDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-online" />;
}
