import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-ots');
}

export default function RealMapNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-ots" />;
}
