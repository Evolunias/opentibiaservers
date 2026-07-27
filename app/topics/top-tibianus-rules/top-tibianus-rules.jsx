import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-rules');
}

export default function TopTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-rules" />;
}
