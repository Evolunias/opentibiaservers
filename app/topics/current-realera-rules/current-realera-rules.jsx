import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-rules');
}

export default function CurrentRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-realera-rules" />;
}
