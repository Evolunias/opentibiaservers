import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-official');
}

export default function RealMapCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-official" />;
}
