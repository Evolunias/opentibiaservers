import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-sweden');
}

export default function EvoluniaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-sweden" />;
}
