import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-rules');
}

export default function TibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiara-rules" />;
}
