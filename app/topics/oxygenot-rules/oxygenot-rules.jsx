import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-rules');
}

export default function OxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-rules" />;
}
