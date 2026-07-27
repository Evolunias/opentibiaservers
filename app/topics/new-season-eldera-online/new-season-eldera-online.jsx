import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-online');
}

export default function NewSeasonElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-online" />;
}
