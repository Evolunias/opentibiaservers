import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-rules');
}

export default function CustomTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-rules" />;
}
