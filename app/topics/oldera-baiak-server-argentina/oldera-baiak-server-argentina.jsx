import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-argentina');
}

export default function OlderaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-argentina" />;
}
