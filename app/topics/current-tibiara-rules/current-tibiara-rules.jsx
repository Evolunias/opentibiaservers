import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-rules');
}

export default function CurrentTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-rules" />;
}
