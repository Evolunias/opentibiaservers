import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-login');
}

export default function RealMapAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-login" />;
}
