import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-online');
}

export default function OfficialUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-unline-online" />;
}
