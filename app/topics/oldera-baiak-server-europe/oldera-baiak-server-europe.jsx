import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-europe');
}

export default function OlderaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-europe" />;
}
