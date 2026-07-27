import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-online');
}

export default function HighrateEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-online" />;
}
