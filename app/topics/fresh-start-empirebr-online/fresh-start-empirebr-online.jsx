import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-online');
}

export default function FreshStartEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-online" />;
}
