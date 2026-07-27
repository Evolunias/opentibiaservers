import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-client');
}

export default function BaiakServerClientKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-client" />;
}
