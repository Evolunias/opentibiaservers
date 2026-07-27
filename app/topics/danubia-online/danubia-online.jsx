import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-online');
}

export default function DanubiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="danubia-online" />;
}
