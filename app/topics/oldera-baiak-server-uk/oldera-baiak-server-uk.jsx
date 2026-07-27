import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-uk');
}

export default function OlderaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-uk" />;
}
