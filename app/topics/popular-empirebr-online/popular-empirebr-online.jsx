import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-online');
}

export default function PopularEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-online" />;
}
