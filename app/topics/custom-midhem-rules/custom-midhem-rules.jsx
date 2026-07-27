import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-rules');
}

export default function CustomMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-rules" />;
}
