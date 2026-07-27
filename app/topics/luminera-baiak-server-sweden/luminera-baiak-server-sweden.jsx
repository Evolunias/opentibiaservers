import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-sweden');
}

export default function LumineraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-sweden" />;
}
