import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-germany');
}

export default function OriginaltibiaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-germany" />;
}
