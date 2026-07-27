import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-rules');
}

export default function LowrateTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-rules" />;
}
