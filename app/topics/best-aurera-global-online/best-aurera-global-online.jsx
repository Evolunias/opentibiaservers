import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-online');
}

export default function BestAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-online" />;
}
