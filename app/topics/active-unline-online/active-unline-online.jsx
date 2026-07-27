import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-online');
}

export default function ActiveUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-unline-online" />;
}
