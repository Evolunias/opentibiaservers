import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-rules');
}

export default function ActiveMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-rules" />;
}
