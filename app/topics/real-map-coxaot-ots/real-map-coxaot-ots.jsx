import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-ots');
}

export default function RealMapCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-ots" />;
}
