import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-online');
}

export default function NewClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-online" />;
}
