import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-brazil');
}

export default function OriginaltibiaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-brazil" />;
}
