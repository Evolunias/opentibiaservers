import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-online');
}

export default function CustomMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-online" />;
}
