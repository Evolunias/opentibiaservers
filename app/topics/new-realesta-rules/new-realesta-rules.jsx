import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-rules');
}

export default function NewRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-rules" />;
}
