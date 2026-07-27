import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-south-america');
}

export default function AlasteraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-south-america" />;
}
