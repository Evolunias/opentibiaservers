import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-rules');
}

export default function NewCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-rules" />;
}
