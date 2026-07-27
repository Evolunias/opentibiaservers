import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-ots');
}

export default function RealMapNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-ots" />;
}
