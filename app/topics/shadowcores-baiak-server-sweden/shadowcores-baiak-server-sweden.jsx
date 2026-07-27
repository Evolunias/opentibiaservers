import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-sweden');
}

export default function ShadowcoresBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-sweden" />;
}
