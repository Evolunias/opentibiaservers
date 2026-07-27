import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-online');
}

export default function CustomClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-online" />;
}
