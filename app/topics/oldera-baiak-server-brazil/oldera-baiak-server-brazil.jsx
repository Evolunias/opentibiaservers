import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-brazil');
}

export default function OlderaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-brazil" />;
}
