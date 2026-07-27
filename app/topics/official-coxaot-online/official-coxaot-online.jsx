import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-online');
}

export default function OfficialCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-online" />;
}
