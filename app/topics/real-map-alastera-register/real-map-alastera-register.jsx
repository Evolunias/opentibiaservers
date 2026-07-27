import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-register');
}

export default function RealMapAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-register" />;
}
