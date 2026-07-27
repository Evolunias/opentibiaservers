import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-rules');
}

export default function LowrateCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-rules" />;
}
