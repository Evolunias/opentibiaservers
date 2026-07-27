import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-online');
}

export default function ActiveClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-online" />;
}
