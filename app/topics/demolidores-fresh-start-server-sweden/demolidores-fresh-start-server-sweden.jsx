import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-sweden');
}

export default function DemolidoresFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-sweden" />;
}
