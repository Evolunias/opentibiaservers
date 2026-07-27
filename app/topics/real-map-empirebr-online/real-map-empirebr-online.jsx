import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-online');
}

export default function RealMapEmpirebrOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-online" />;
}
