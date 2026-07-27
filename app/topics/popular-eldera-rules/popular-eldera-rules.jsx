import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-rules');
}

export default function PopularElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-rules" />;
}
