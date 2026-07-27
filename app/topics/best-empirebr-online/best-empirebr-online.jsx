import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-online');
}

export default function BestEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-online" />;
}
