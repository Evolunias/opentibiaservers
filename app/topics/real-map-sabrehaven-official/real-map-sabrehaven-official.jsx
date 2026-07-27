import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-official');
}

export default function RealMapSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-official" />;
}
