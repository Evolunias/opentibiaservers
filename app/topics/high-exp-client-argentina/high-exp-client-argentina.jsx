import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-argentina');
}

export default function HighExpClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-argentina" />;
}
