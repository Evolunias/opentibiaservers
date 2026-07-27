import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-ot');
}

export default function RealMapNilotOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-ot" />;
}
