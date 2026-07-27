import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-rules');
}

export default function CurrentRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-rules" />;
}
