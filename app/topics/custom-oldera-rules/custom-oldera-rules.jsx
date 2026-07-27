import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-rules');
}

export default function CustomOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-rules" />;
}
