import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-usa');
}

export default function OriginaltibiaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-usa" />;
}
