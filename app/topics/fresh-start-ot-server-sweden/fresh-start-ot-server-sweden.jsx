import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-sweden');
}

export default function FreshStartOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-sweden" />;
}
