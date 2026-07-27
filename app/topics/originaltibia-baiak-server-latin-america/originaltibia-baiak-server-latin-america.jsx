import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-latin-america');
}

export default function OriginaltibiaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-latin-america" />;
}
