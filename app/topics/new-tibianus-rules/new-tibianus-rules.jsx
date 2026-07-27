import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-rules');
}

export default function NewTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-rules" />;
}
