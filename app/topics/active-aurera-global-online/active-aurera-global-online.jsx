import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-online');
}

export default function ActiveAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-online" />;
}
