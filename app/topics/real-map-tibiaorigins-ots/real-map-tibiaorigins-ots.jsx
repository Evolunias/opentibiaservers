import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-ots');
}

export default function RealMapTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-ots" />;
}
