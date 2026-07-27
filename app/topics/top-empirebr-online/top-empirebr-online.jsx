import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-online');
}

export default function TopEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-online" />;
}
