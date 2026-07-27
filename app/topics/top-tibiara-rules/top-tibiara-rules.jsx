import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-rules');
}

export default function TopTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-rules" />;
}
