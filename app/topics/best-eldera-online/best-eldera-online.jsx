import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-online');
}

export default function BestElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-online" />;
}
