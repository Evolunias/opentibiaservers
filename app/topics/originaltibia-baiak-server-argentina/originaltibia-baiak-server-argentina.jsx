import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-argentina');
}

export default function OriginaltibiaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-argentina" />;
}
