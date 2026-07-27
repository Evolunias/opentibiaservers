import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-rules');
}

export default function BestTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-rules" />;
}
