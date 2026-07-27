import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-rules');
}

export default function TopMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-rules" />;
}
