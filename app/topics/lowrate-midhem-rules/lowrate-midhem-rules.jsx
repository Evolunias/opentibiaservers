import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-rules');
}

export default function LowrateMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-rules" />;
}
