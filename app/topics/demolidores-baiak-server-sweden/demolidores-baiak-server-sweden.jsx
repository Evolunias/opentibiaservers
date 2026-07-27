import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-sweden');
}

export default function DemolidoresBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-sweden" />;
}
