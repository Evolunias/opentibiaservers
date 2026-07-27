import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-usa');
}

export default function OlderaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-usa" />;
}
