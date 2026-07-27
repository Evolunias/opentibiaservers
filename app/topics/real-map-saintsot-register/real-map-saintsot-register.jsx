import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-register');
}

export default function RealMapSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-register" />;
}
