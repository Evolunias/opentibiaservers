import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-south-america');
}

export default function OriginaltibiaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-south-america" />;
}
