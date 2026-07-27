import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-rules');
}

export default function ActiveTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-rules" />;
}
