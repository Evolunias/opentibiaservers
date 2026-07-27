import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-online');
}

export default function UnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="unline-online" />;
}
