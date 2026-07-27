import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-rules');
}

export default function PopularTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-rules" />;
}
