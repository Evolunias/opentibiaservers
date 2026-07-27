import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-rules');
}

export default function RealMapSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-rules" />;
}
