import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-login');
}

export default function RealMapSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-login" />;
}
