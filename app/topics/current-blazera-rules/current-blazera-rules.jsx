import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-rules');
}

export default function CurrentBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-rules" />;
}
