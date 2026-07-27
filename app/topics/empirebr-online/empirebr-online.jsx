import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-online');
}

export default function EmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="empirebr-online" />;
}
