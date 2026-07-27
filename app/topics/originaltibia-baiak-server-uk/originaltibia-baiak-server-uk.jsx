import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-uk');
}

export default function OriginaltibiaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-uk" />;
}
