import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-rules');
}

export default function RealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="realesta-rules" />;
}
