import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-rules');
}

export default function PopularMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-rules" />;
}
