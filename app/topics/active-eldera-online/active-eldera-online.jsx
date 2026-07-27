import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-online');
}

export default function ActiveElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-online" />;
}
