import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-poland');
}

export default function OlderaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-poland" />;
}
