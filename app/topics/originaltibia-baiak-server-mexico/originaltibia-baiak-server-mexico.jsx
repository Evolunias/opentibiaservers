import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-mexico');
}

export default function OriginaltibiaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-mexico" />;
}
