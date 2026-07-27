import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-poland');
}

export default function OriginaltibiaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-poland" />;
}
