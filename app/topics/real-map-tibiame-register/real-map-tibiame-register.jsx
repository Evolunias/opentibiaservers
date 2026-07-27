import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-register');
}

export default function RealMapTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-register" />;
}
