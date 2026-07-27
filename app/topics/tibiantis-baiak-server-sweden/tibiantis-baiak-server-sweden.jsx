import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-sweden');
}

export default function TibiantisBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-sweden" />;
}
