import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-online');
}

export default function OfficialClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-online" />;
}
