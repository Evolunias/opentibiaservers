import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-official');
}

export default function RealMapTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-official" />;
}
