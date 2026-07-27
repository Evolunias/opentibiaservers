import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-north-america');
}

export default function OriginaltibiaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-north-america" />;
}
