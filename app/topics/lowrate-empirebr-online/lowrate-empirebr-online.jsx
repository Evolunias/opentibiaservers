import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-online');
}

export default function LowrateEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-online" />;
}
