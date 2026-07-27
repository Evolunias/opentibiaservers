import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-rules');
}

export default function PopularCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-rules" />;
}
