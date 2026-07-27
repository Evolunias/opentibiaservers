import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-rules');
}

export default function RealMapMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-rules" />;
}
