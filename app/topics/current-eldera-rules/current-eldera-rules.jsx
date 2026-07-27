import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-rules');
}

export default function CurrentElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-rules" />;
}
