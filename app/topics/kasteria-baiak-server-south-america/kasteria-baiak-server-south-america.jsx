import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-south-america');
}

export default function KasteriaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-south-america" />;
}
