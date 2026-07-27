import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-usa');
}

export default function FreshStartClientUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-usa" />;
}
