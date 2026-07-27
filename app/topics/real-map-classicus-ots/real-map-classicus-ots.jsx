import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-ots');
}

export default function RealMapClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-ots" />;
}
