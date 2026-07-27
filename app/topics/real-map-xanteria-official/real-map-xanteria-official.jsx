import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-official');
}

export default function RealMapXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-official" />;
}
