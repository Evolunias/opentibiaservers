import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-online');
}

export default function ActiveTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-online" />;
}
