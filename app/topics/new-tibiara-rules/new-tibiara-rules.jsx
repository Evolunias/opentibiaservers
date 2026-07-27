import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-rules');
}

export default function NewTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-rules" />;
}
