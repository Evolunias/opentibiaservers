import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-rules');
}

export default function NewRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-realera-rules" />;
}
