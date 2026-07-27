import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-sweden');
}

export default function SabrehavenBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-sweden" />;
}
