import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-rules');
}

export default function CoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="coxaot-rules" />;
}
