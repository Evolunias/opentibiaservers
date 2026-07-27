import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-rules');
}

export default function TibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="tibianus-rules" />;
}
