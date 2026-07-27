import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-download');
}

export default function RealMapEmpirebrDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-download" />;
}
