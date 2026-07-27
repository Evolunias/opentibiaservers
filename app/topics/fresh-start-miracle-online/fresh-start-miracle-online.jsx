import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-online');
}

export default function FreshStartMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-online" />;
}
