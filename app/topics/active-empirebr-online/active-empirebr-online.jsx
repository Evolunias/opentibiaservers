import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-online');
}

export default function ActiveEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-online" />;
}
