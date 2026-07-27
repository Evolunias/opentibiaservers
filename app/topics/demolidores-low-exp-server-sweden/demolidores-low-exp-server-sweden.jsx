import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-sweden');
}

export default function DemolidoresLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-sweden" />;
}
