import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-ot');
}

export default function RealMapClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-ot" />;
}
