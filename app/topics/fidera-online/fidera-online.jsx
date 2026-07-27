import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-online');
}

export default function FideraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fidera-online" />;
}
