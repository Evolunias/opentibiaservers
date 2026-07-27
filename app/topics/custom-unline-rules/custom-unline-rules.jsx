import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-rules');
}

export default function CustomUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-rules" />;
}
