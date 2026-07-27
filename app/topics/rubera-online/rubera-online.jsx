import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-online');
}

export default function RuberaOnlineKeywordPage() {
  return <StaticKeywordPage slug="rubera-online" />;
}
