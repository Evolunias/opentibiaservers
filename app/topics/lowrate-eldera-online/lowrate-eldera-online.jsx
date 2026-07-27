import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-online');
}

export default function LowrateElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-online" />;
}
