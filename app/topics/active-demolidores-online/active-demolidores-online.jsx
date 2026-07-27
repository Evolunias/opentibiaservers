import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-online');
}

export default function ActiveDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-online" />;
}
