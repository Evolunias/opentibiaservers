import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-rules');
}

export default function FreshStartCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-rules" />;
}
