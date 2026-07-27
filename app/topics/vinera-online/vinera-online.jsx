import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-online');
}

export default function VineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="vinera-online" />;
}
