import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-rules');
}

export default function ActiveOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-rules" />;
}
