import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-online');
}

export default function NewSeasonMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-online" />;
}
