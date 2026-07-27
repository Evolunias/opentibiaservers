import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-rules');
}

export default function CurrentCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-rules" />;
}
