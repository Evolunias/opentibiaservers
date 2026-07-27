import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-rules');
}

export default function TopCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-rules" />;
}
