import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-register');
}

export default function RealMapKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-register" />;
}
