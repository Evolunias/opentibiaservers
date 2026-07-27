import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-login');
}

export default function RealMapSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-login" />;
}
