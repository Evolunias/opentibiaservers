import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-online');
}

export default function NewSeasonUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-online" />;
}
