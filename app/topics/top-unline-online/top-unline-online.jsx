import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-online');
}

export default function TopUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-unline-online" />;
}
