import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-rules');
}

export default function RealMapTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-rules" />;
}
