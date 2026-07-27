import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-sweden');
}

export default function ImperianicBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-sweden" />;
}
