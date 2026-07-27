import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-register');
}

export default function RealMapClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-register" />;
}
