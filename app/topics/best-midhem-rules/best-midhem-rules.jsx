import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-rules');
}

export default function BestMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-rules" />;
}
