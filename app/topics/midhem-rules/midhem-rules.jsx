import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-rules');
}

export default function MidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="midhem-rules" />;
}
