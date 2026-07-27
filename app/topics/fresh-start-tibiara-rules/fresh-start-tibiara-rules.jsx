import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-rules');
}

export default function FreshStartTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-rules" />;
}
