import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-website');
}

export default function RealMapEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-website" />;
}
