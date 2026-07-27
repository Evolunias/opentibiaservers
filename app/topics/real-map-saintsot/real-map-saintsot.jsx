import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot');
}

export default function RealMapSaintsotKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot" />;
}
