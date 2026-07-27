import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-official');
}

export default function RealMapLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-official" />;
}
