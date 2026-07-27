import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-online');
}

export default function ActiveTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-online" />;
}
