import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-official');
}

export default function RealMapEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-official" />;
}
