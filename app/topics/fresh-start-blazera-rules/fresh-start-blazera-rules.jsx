import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-rules');
}

export default function FreshStartBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-rules" />;
}
