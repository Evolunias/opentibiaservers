import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-germany');
}

export default function OlderaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-germany" />;
}
