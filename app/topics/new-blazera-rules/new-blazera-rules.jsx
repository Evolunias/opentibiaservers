import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-rules');
}

export default function NewBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-rules" />;
}
