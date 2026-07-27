import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-rules');
}

export default function CurrentMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-rules" />;
}
