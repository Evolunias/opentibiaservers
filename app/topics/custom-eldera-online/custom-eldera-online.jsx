import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-online');
}

export default function CustomElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-online" />;
}
