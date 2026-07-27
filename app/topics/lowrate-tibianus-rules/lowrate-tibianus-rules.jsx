import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-rules');
}

export default function LowrateTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-rules" />;
}
