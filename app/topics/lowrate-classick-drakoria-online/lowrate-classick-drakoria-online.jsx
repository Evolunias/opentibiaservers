import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-online');
}

export default function LowrateClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-online" />;
}
