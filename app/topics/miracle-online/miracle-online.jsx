import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-online');
}

export default function MiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="miracle-online" />;
}
