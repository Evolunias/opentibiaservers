import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-south-america');
}

export default function EvoleraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-south-america" />;
}
