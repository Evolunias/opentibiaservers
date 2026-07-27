import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-online');
}

export default function FreshStartUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-online" />;
}
