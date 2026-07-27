import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-register');
}

export default function RealMapNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-register" />;
}
