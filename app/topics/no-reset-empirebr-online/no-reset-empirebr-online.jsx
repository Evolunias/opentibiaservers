import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-online');
}

export default function NoResetEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-online" />;
}
