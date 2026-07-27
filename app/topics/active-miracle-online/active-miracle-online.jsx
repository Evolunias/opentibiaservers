import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-online');
}

export default function ActiveMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-online" />;
}
