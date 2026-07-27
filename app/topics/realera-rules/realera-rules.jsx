import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-rules');
}

export default function RealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="realera-rules" />;
}
