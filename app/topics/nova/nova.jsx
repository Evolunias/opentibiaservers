import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova');
}

export default function NovaKeywordPage() {
  return <StaticKeywordPage slug="nova" />;
}
