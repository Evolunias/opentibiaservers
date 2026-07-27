import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-online');
}

export default function CurrentEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-online" />;
}
