import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-rules');
}

export default function UnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="unline-rules" />;
}
