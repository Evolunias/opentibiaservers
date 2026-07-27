import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-europe');
}

export default function OriginaltibiaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-europe" />;
}
