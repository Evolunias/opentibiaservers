import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-argentina');
}

export default function FreshStartClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-argentina" />;
}
