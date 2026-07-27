import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-rules');
}

export default function FreshStartMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-rules" />;
}
