import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-sweden');
}

export default function CyntaraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-sweden" />;
}
