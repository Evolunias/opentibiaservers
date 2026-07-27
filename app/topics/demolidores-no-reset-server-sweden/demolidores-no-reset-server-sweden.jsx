import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-sweden');
}

export default function DemolidoresNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-sweden" />;
}
