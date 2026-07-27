import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-online');
}

export default function AsteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="astera-online" />;
}
