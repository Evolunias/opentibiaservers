import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-register-latin-america');
}

export default function RealMapRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-register-latin-america" />;
}
