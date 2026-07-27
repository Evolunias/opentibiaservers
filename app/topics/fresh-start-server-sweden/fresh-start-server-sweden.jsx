import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-sweden');
}

export default function FreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-sweden" />;
}
