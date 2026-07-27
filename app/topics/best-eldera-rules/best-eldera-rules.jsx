import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-rules');
}

export default function BestElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-rules" />;
}
