import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-online');
}

export default function OfficialMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-online" />;
}
