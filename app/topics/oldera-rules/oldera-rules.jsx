import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-rules');
}

export default function OlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="oldera-rules" />;
}
