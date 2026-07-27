import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-south-america');
}

export default function ClassicusBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-south-america" />;
}
