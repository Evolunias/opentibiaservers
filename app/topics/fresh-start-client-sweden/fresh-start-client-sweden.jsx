import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-sweden');
}

export default function FreshStartClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-sweden" />;
}
