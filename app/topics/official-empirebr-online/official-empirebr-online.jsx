import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-online');
}

export default function OfficialEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-online" />;
}
