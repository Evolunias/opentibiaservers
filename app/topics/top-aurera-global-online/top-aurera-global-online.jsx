import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-online');
}

export default function TopAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-online" />;
}
