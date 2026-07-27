import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-online');
}

export default function FreshStartAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-online" />;
}
